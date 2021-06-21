import { Injectable } from '@nestjs/common';
import { CreateUserInputs } from './dto/inputs/create-user.inputs';
import { User } from './model/user';
import { uuid as uuidv4 } from 'uuid'

@Injectable()
export class UsersService {

    private users: User[] = []


    public createUser(createUserData: CreateUserInputs): User{

        const user : User = {
            userId: uuidv4(),
            isSubscribed: false,
            ...createUserData
        }

        this.users.push(user)

        return user
    }

    public getUser(): User{
        return 
    }

    public getUsers(): [User]{
        return 
    }

    public updateUser(): User{
        return 
    }

    public deleleUser(): User{
        return
    }

}
