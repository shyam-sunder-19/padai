const Sort = () => {
    return(
        <div className="flex items-center mr-14 mt-3">
            <div className="font-light">Sort By:</div>
            <select name="Sort by" className="border rounded ml-1 p-2">
                <option value=""></option>
                <option value="fee">fee</option>
                <option value="term">Term</option>
            </select>
        </div>
    )
}

export default Sort