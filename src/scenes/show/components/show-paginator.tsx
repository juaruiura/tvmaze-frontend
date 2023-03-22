import React from "react";

interface Props {
    pageHandler: (action: string) => void,
    page: number,
}

export const ShowPaginator: React.FC<Props> = (props) => {
    const { pageHandler, page } = props;

    return (
        <div className="show-paginator">
            {page > 0 && <button onClick={() => pageHandler("decrease")}>&lt; Previous Page</button>}
            <button onClick={() => pageHandler("increase")}>Next Page &gt;</button>
        </div>
    )
};
