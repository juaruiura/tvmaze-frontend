import React from "react";

interface Props {
    searchHandler: (showName: string) => void,
}

export const ShowSearch: React.FC<Props> = (props) => {
    const { searchHandler } = props;

    const [showName, setShowName] = React.useState("");

    return (
        <div className="show-search">
            <input type="text" className="show-search__textfield" onChange={(e) => setShowName(e.target.value)}/>
            <button className="show-search__button"
                onClick={() => searchHandler(showName)}>
                Search
            </button>
        </div>
    );
};