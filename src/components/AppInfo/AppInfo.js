import { useDispatch, useSelector } from "react-redux";

import Card from "../UI/Card";
import { uiActions } from '../store/ui-slice';
import { appInfoES } from "./AppInfoES";
import { appInfoEN } from "./AppInfoEN";

export default function AppInfo() {

    const englisLang = useSelector(state => state.ui.infoEN);

    let content = appInfoES;

    if (englisLang) {
        content = appInfoEN;
    }

    const dispatch = useDispatch();

    function handleClose() {
        dispatch(uiActions.hiddeInfoApp())
    }

    function handleLanguage() {
        dispatch(uiActions.setLanguageInfo())
    }

    return (
        <Card>
            <div>
                <button onClick={handleLanguage}> {englisLang ? "ES" : "EN"} </button>
            </div>
            {content.map((info) => {
                return (
                    <div key={info.title}>
                        <h3>{info.title} </h3>
                        <div>
                            {info.paragrahs.map(ph => <p key={ph}> {ph} </p>)}
                        </div>
                    </div>
                )
            })}
            <button onClick={handleClose}> Close </button>
        </Card>
    );
};