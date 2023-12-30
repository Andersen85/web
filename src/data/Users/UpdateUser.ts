const UpdateUser = async (
  data: {
    firstName: string,
    secondName: string,
    surname: string,
    email: string,
    phone: number,
    tgLogin: string,
    roles: string
  },
  id: string,
  accessToken: string
) => {
  console.log(accessToken)
  let UserData = await fetch(`http://62.173.140.183:5000/api/users/${id}`, {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken,
    }),
    mode: 'cors',
    method: 'PUT',
    body: JSON.stringify(data),
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
export default UpdateUser;
