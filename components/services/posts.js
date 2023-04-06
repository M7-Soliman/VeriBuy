import firebase from "firebase";
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

export const buyAction = (postId, uid) => new Promise((resolve, reject) =>{
  firebase
  .firestore()
  .collection("orders")
  .doc(uid)
  .set({})
})