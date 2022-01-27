import {
  List,
  TextField,
  TagField,
  DateField,
  Table,
  useTable,
  useMany,
  Select,
  useSelect,
  FilterDropdown,
} from "@pankod/refine";

import { IPost, ICategory } from "interface";

export const PostList: React.FC = () => {
    const {tableProps} = useTable<IPost>()

    const categoryIds = tableProps?.dataSource?.map(item => (item.category.id)) ?? []
    const { data: categoriesData, isLoading } = useMany<ICategory>({
        resource: "categories",
        ids: categoryIds,
        queryOptions: {
            enabled: categoryIds.length > 0
        }
    })
    const { selectProps: categoriesSelectProps } = useSelect<ICategory>({ resource: "categories" })

    return(
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="title" title="Title" />
                <Table.Column dataIndex="status" title="Status" render={value => <TagField value={value} />} />
                <Table.Column dataIndex="createdAt" title="Created At" render={value => <DateField format="LLL" value={value} />} />
                <Table.Column 
                    dataIndex={["category", "id"]} 
                    title="Category" 
                    render={value => {
                        if(isLoading) return (<TextField value="Loading..." />)     
                        return(<TextField value={categoriesData?.data.find(item => item.id === value)?.title} />)
                    }} 
                    filterDropdown={props => (
                        <FilterDropdown {...props}>
                            <Select 
                                style={{ minWidth: 200 }}
                                mode="multiple"
                                placeholder="Select Category"
                                {...categoriesSelectProps}
                            />
                        </FilterDropdown>
                    )}
                />
            </Table>
        </List>
    )
}
