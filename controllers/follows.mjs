export default function initFollowsController (db) {
    const getFollows = async (req, res) => {
        try{
            const  followed = await db.User.findOne({
                where: {
                    id: Number(req.cookies.userId),
                },
                include: [{ 
                    model: db.User, 
                    as: 'followed',
                }]
            })

            
            console.log('people that are following user', followed.followed);
            // console.log('people that user is following', following.following);
            
            res.send({followed: followed.followed});
        }
        catch (error) {
            console.log(error)
        }
    }

    return { getFollows }
}