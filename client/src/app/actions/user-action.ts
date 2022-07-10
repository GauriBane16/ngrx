import { User } from "../models/user";

export const USER_LIST_REQUEST='user list request';
export const USER_LIST_SUCCESS='user list success';
export const USER_LIST_ERROR='user list error';
export const USER_DELETE='user delete';
export const UPDATE_USER='update user';

export class userListRequestAction {
    readonly type=USER_LIST_REQUEST;
}

export class userListSuccessAction {
    readonly type=USER_LIST_SUCCESS;
    constructor(public payload?:{data:User[]}){}
}

export class userListErrorAction {
    readonly type=USER_LIST_ERROR;
}

export class userDeleteAction {
    readonly type=USER_DELETE;
    constructor(public payload?:{id:number}){}
}

export class userUpdateAction {
    readonly type=UPDATE_USER;
    constructor(public payload?:{data:User}){}
}

