function List(props) {
    console.log(props.memo);
    return (
        <li>
            <p>{props.memo}</p>
            <button>삭제</button>
        </li>
    )
}

export default List