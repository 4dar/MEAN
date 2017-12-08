export class User {
    constructor(
      public id: number = null,
      public firstName: string = "",
      public lastName: string = "",
      public email: string = "",
      public password: string = "",
      public pConfirm: string = "",
      public address: any = "",
      public unit: any = "",
      public city: string = "",
      public state: string = "",
      public lucky: string = "",
      public created_at: Date = new Date(),
      public updated_at: Date = new Date()
    ){}
  }