import { Refine } from "@pankod/refine";
import routerProvider from "@pankod/refine-react-router";
import dataProvider from "@pankod/refine-simple-rest";

import "@pankod/refine/dist/styles.min.css";

import { PostList, PostShow, PostEdit } from "pages/posts";

const App: React.FC = () => {
    return (
        <Refine
            routerProvider={routerProvider}
            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
            resources={[{ 
              name: 'posts', 
              list: PostList, 
              show: PostShow,
              edit: PostEdit
            }]}
        />
    );
};

export default App;