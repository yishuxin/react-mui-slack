import 'firebase/auth'
import app from 'firebase/app'
import firebaseConfig from './firebaseConfig'
import md5 from 'md5'

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)
    this.auth = app.auth()
  }
  async register(name, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    )
    return await newUser.user.updateProfile({
      displayName: name,
      photoURL: `https://gravatar.com/avatar/${md5(
        newUser.user.email
      )}?d=identicon`,
    })
  }

  async login(email, password) {
    await this.auth.signInWithEmailAndPassword(email, password)
  }

  async logout() {
    await this.auth.signOut()
  }
}

const firebase = new Firebase()

export default firebase
