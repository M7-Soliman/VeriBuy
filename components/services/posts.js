import firebase from "firebase";
import _ from 'lodash';


export const getFeed = () =>
  new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("post")
      .get()
      .then((res) => {
        let posts = res.docs.map((value) => {
          const id = value.id;
          const data = value.data();
          return { id, ...data };
        });
        resolve(posts);
      });
  });

export const buyAction = (uid, name, address, number, postId, postmedia, seller, price) =>{
  firebase
  .firestore()
  .collection("orders")
  .doc(uid)
  .collection(postId)
  .add({
    name, 
    address,
    number, 
    postmedia,
    seller,
    price,
    creation: firebase.firestore.FieldValue.serverTimestamp(),
  })
}

export const reportAction = (reporterId, reason, postId, seller) =>{
  firebase
  .firestore()
  .collection("reports")
  .doc(postId)
  .collection(reporterId)
  .add({
    reporterId,
    reason,
    postId, 
    seller,
    creation: firebase.firestore.FieldValue.serverTimestamp(),
  })
}