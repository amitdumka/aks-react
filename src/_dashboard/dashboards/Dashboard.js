import React, {useMemo} from "react";
import objectPath from "object-path";
import {useHtmlClassService} from "../../_aks/layout";
import {Demo1Dashboard} from "./Demo1Dashboard";
import {Demo2Dashboard} from "./Demo2Dashboard";
import {Demo3Dashboard} from "./Demo3Dashboard";
import {EStoreDashboard} from "./EStoreDashboard";


export function Dashboard() {
    const uiService = useHtmlClassService();
    const layoutProps = useMemo(() => {
        return {
            demo: objectPath.get(
                uiService.config,
                "demo"
            )};
    }, [uiService]);
    return <>
        {layoutProps.demo === 'estore1' && <Demo1Dashboard />}
        {layoutProps.demo === 'demo2' && <Demo2Dashboard />}
        {layoutProps.demo === 'demo3' && <Demo3Dashboard />}
        {layoutProps.demo === 'demo4' && <EStoreDashboard />}
        
    </>;
}
