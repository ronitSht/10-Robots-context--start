import { Routes, Route } from "react-router-dom";

import {TopBar} from "./topBar";

// content `pages`
import { Home as HomePage } from "./home";
import { Create as CreatePage } from "./create";

// navigation
import { Links } from "./links";
import { Browse } from "./browse";

export const App = () => (
    <>
        <div>
            <TopBar>
                <Links />
            </TopBar>
        </div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/create" element={<CreatePage />} />
        </Routes>
    </>
);

