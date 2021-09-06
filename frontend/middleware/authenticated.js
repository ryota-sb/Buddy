export default function({store, redirect}) {
  if(!store.state.authentication.isAuth) {
    redirect('/login')
  }
}