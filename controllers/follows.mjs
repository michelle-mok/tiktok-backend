export default function initFollowsController (db) {
    const getFollowers = async (req, res) => {
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

    const getFollowing = async (req, res) => {
        try {
            const  following = await db.User.findOne({
                where: {
                    id: Number(req.cookies.userId),
                },
                include: [{ 
                    model: db.User, 
                    as: 'follower',
                }]
            })

            
            console.log('people that user is following', following.follower);
        
            
            res.send({following: following.follower});
        }
        catch (error) {
            console.log(error);
        }
    }
    return { getFollowers, getFollowing }
}