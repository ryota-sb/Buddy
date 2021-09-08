export default function({store, redirect}) {
  if(!store.state.user.isAuth) {
    redirect('/login')
  }
}