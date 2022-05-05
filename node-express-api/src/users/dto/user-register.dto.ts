import { IsEmail, IsString } from 'class-validator';

export class UserRegisternDto {
	@IsEmail({}, { message: 'Wrong email' })
	email: string;

	@IsString({ message: 'Input password' })
	password: string;

	@IsString({ message: 'Input name' })
	name: string;
}
