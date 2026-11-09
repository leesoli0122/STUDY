import './index.css';

function MemoItem({children, onClickItem, isSelected, onClickDelete}) {
    return (
        <div className={"memoItem" + (isSelected ? ' selected' : '')} onClick= {onClickItem}
        >
            {children}
            <button className="memoItem_delete-button" onClick={onClickDelete}>X</button>
        </div>
    )
}

export default MemoItem;