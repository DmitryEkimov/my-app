import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB4YX_KI3i0UT138PHnnkAu7safWQE2kA8",
    authDomain: "pokemon-game-f6d41.firebaseapp.com",
    databaseURL: "https://pokemon-game-f6d41-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-f6d41",
    storageBucket: "pokemon-game-f6d41.appspot.com",
    messagingSenderId: "195217319351",
    appId: "1:195217319351:web:bcb0b027388b72d2f2f432"
  };

firebase.initializeApp(firebaseConfig);
class Firebase {
   constructor(){
    this.fire = firebase;
    this.database = this.fire.database();
   }

   getPokemonsSoket = (cb)=>{
      this.database.ref('pokemons').on('value',(snapshot)=>{
             cb(snapshot.val());
      });
   }

   offPokemonsSoket = ()=>{
    this.database.ref('pokemons').off();
   }

   getPokemonsOnce = async ()=>{
     return await this.database.ref('pokemons').once('value').then(snapshot=>snapshot.val());
   };

   postPokemon = (key,pokemon) =>{
     this.database.ref(`pokemons/${key}`).set(pokemon);
   }

   addPokemon = (data,cb) =>{
     const newKey = this.database.ref().child('pokemons').push().key;
     this.database.ref(`pokemons/${newKey}`).set(data).then(()=> cb && cb());
  }
}
export default Firebase;