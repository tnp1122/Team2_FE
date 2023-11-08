import httpClient from './index';
import { useMutation } from 'react-query';
interface TitleResponse {
    titles: [
        {
            titleId: Number;
            titleName: string | undefined;
            titleGrade: string | undefined;
            titleSub: string | undefined;
            titleDescription: string | undefined;
        },
    ];
}

interface TitleSearchResponse {
    titles: [
        {
            titleId: Number;
            titleName: string | undefined;
        },
    ];
}

interface ChangeTitleData {
    userId: number;
    titleId: number;
}


const changeTitle = async ({ userId, titleId }: ChangeTitleData) => {
    const response = await httpClient.put(`/users/${userId}/titles/${titleId}`);
    if (response?.data)
        alert(response.data.message);
    return response;
};

export const useChangeTitle = () => {
    return useMutation(changeTitle);
};

export const titleApi = {
    getUserTitle: (): Promise<TitleResponse> => httpClient.get('/titles'),
};

export const titleSearchApi = {
    getUserTitles: (userId: string | Number): Promise<TitleSearchResponse> => httpClient.get(`/users/${userId}/rewards`),
};

export default titleApi;