export interface IDepartment {
  id?: number;
  deptName?: string;
}

export class Department implements IDepartment {
  constructor(public id?: number, public deptName?: string) {}
}
