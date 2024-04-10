import client from "lib/api/client"


export const getUniversity = () => {
    return client.get("/universities")
    }

export const getFaculty = (universityId: number) => {
    return client.get(`/universities/${universityId}/faculties`)
}

export const getDepartment = (facultyId: number) => {
    return client.get(`/faculties/${facultyId}/departments`)
}



