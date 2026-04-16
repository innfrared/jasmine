import type { UserDto } from '../../service/types';

export interface SessionUser {
  id: number;
  email: string;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  isActive: boolean;
  createdAt: string;
}

export const mapUserDtoToSessionUser = (user: UserDto): SessionUser => ({
  id: user.id,
  email: user.email,
  firstName: user.first_name,
  lastName: user.last_name,
  phone: user.phone,
  isActive: user.is_active,
  createdAt: user.created_at,
});
