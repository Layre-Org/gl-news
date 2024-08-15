import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<Pick<CreateUserDto, "username" | "email" | "password" | "avatar">>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export {};
