
import firebase from 'firebase'
import { saveMediaToStorage } from '../../components/services/random'
require('firebase/firebase-auth')
require('firebase/firestore')
import uuid from "uuid-random";
import { CURRENT_USER_POSTS_UPDATE } from '../constants'



export const createPost = (description, price, name, category,video, thumbnail) => dispatch => new Promise((resolve, reject) => {
    let storagePostId = uuid()
    let allSavePromises = Promise.all([
        saveMediaToStorage(video, `post/${firebase.auth().currentUser.uid}/${storagePostId}/video`),
        saveMediaToStorage(thumbnail, `post/${firebase.auth().currentUser.uid}/${storagePostId}/thumbnail`)
    ])

    allSavePromises
        .then((media) => {
            firebase.firestore()
                .collection('post')
                .doc(storagePostId)
                .set({
                    creator: firebase.auth().currentUser.uid,
                    media,
                    description,
                    likesCount: 0,
                    commentsCount: 0,
                    pid: storagePostId,
                    price,
                    name,
                    category,
                    creation: firebase.firestore.FieldValue.serverTimestamp()
                })
                .then(() => resolve())
                .catch(() => reject())
        })
        .catch(() => reject())
})

export const getPostsByUser = (uid = firebase.auth().currentUser.uid) => dispatch => new Promise((resolve, reject) => {
    firebase.firestore()
        .collection('post')
        .where('creator', '==', uid)
        .orderBy('creation', 'desc')
        .onSnapshot((snapshot) => {
            let posts = snapshot.docs.map(doc => {
                const data = doc.data()
                const id = doc.id
                return { id, ...data }
            })
            console.log(posts)
            dispatch({ type: CURRENT_USER_POSTS_UPDATE, currentUserPosts: posts })
        })
})
