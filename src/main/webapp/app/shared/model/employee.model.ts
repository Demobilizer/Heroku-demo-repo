import { IUser } from 'app/core/user/user.model';
import { IDepartment } from 'app/shared/model/department.model';
import { Designation } from 'app/shared/model/enumerations/designation.model';

export interface IEmployee {
  id?: number;
  empName?: string;
  countryCode?: number;
  designation?: Designation;
  user?: IUser;
  department?: IDepartment;
}

export class Employee implements IEmployee {
  constructor(
    public id?: number,
    public empName?: string,
    public countryCode?: number,
    public designation?: Designation,
    public user?: IUser,
    public department?: IDepartment
  ) {}
}
