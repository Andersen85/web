const GetManagerReq = async (
  accessToken: string,
  id: string
) => {
  let UserData = await fetch(`http://62.173.140.183:5000/api/users/${id}`, {
      headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken,
      }),
      mode: 'cors',
      method: 'GET',
      credentials: 'include',//чтобы токен работал это поле должно быть во всех запросах
      keepalive: true
  }
  )
  const answer = await UserData.json();
  if (UserData.ok) {
      return answer;
  } else {
      const errAns = { status: UserData.status, message: answer.message }
      return errAns;
  }
}
export default GetManagerReq;
