import {Routes, Route } from "react-router-dom";
import ALayout from "./ALayout";

import ListScenarios from "./listScenarios";
import ListHouse from "./listHouse";
const AdministrationRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout/>} >

                <Route path="/" element={
                    <>
                        <ListHouse/>
                        <ListScenarios/>
                    </>
                }/> 


                
            </Route>
        </Routes>
    );

}
export default AdministrationRouter;