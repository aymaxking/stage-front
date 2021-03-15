export class Utilisateur{


  // @ts-ignore
  id:number;

  constructor(id: number, type: string, login: string, password: string, matricule: string) {
    this.id = id;
    this.type = type;
    this.login = login;
    this.password = password;
    this.matricule = matricule;
  }

// @ts-ignore
  type:string;
  // @ts-ignore
  login:string;
  // @ts-ignore
  password:string;
  // @ts-ignore
  matricule:string;

  static parse(json: string) {
    var data = JSON.parse(json);
    return new Utilisateur(data.id,data.type,data.login,data.password,data.matricule);
  }


}
