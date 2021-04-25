export const getStudentDetails = (url = 'https://apitestingpractice.herokuapp.com/getStudents') => {
    return fetch(url).then(res => res.json())
}