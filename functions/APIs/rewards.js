const { db } = require('../util/admin');

exports.getAllRewards = (request, response) => {
	db
        .collection('Rewards')
        // .where('valid', '==', true)
		.get()
		.then((data) => {
			let Rewards = [];
			data.forEach((doc) => {
				Rewards.push({
                    // rewardId: doc.id,
                    rname: doc.data().rname,
                    description: doc.data().description,
					pointsRequired: doc.data().pointsRequired,
					redemptionCap: doc.data().redemptionCap,
					valid: doc.data().valid,
				});
			});
			return response.json(Rewards);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};

// exports.getOnereward = (request, response) => {
// 	db
//         .doc(`/Rewards/${request.params.rewardId}`)
// 		.get()
// 		.then((doc) => {
// 			if (!doc.exists) {
// 				return response.status(404).json(
//                     { 
//                         error: 'reward not found' 
//                     });
//             }
//             if(doc.data().username !== request.user.username){
//                 return response.status(403).json({error:"UnAuthorized"})
//             }
// 			rewardData = doc.data();
// 			rewardData.rewardId = doc.id;
// 			return response.json(rewardData);
// 		})
// 		.catch((err) => {
// 			console.error(err);
// 			return response.status(500).json({ error: error.code });
// 		});
// };

// exports.postOnereward = (request, response) => {
// 	if (request.body.body.trim() === '') {
// 		return response.status(400).json({ body: 'Must not be empty' });
//     }
    
//     if(request.body.title.trim() === '') {
//         return response.status(400).json({ title: 'Must not be empty' });
//     }
    
//     const newrewardItem = {
//         title: request.body.title,
//         username: request.user.username,
//         body: request.body.body,
//         createdAt: new Date().toISOString()
//     }

//     db
//         .collection('Rewards')
//         .add(newrewardItem)
//         .then((doc)=>{
//             const responserewardItem = newrewardItem;
//             responserewardItem.id = doc.id;
//             return response.json(responserewardItem);
//         })
//         .catch((error) => {
//             console.error(error);
// 			response.status(500).json({ error: 'Something went wrong' });
// 		});
// };

// exports.deletereward = (request, response) => {
//     const document = db.doc(`/Rewards/${request.params.rewardId}`);
//     document
//         .get()
//         .then((doc) => {
//             if (!doc.exists) {
//                 return response.status(404).json({ 
//                     error: 'reward not found' 
//             })}
//             if(doc.data().username !== request.user.username){
//                 return response.status(403).json({error:"UnAuthorized"})
//             }
//             return document.delete();
//         })
//         .then(() => {
//             response.json({ message: 'Delete successfull' });
//         })
//         .catch((err) => {
//             console.error(err);
//             return response.status(500).json({ 
//                 error: err.code 
//             });
//         });
// };

// exports.editreward = ( request, response ) => { 
//     if(request.body.rewardId || request.body.createdAt){
//         response.status(403).json({message: 'Not allowed to edit'});
//     }
//     let document = db.collection('Rewards').doc(`${request.params.rewardId}`);
//     document.update(request.body)
//     .then((doc)=> {
//         response.json({message: 'Updated successfully'});
//     })
//     .catch((error) => {
//         if(error.code === 5){
//             response.status(404).json({message: 'Not Found'});
//         }
//         console.error(error);
//         return response.status(500).json({ 
//                 error: error.code 
//         });
//     });
// };