import Loader from "../Loader/Loader"

const WithLoader = (WrappedComponent: any) => {
  return function(props: any) {
    if(props.isLoading) return <Loader />
    else return <WrappedComponent data={props.data} searchUser={props.searchUser} invalidRequest={props.invalidRequest}/>
  }
}

export default WithLoader