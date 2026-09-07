class apiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  } 
  get(path)
  {
    return this.baseUrl + path; 
  }
}
let staging= new apiClient("https://staging.api.com");
console.log(staging.get("/users"));
let prod=new apiClient("https://prod.api.com");
console.log(prod.get("/users"));