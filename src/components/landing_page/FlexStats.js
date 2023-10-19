const FlexStats = ({ stats }) => {
    return (
        <div className="flex flex-wrap p-16 bg-blue-300 justify-around items-center">
            {
                Object.keys(stats).map(
                    stat => {
                        return (
                            <div key={stat} className="flex flex-col w-96 justify-center items-center p-8 text-white">
                                <p className="text-4xl font-bold">{stats[stat]} +</p>
                                <p className="text-2xl">{stat}</p>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default FlexStats