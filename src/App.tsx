import { Refine } from "@pankod/refine";
import routerProvider from "@pankod/refine-react-router";
import dataProvider from "@pankod/refine-simple-rest";

import "@pankod/refine/dist/styles.min.css";

import { PostList, PostShow, PostEdit, PostCreate } from "pages/posts";

const App: React.FC = () => {
    return (
        <Refine
            routerProvider={routerProvider}
            dataProvider={dataProvider(process.env.REACT_APP_API_URL as string)}
            resources={[{ 
              name: 'posts', 
              list: PostList, 
              show: PostShow,
              edit: PostEdit,
              create: PostCreate,
              canDelete: true
            }]}
        />
    );
};

export default App;