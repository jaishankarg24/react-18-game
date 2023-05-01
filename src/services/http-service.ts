import apiClient from "./api-clients";

interface Entity {
  id: number;
}
// Generic HttpService Class
class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const controller = new AbortController();
    //this.endpoint; === "/users"
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  delete(id: number) {
    return apiClient.delete(this.endpoint + "/" + id);
  }

  //createUser(user: User)
  create<T>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  //updateUser(user: User)
  update<T extends Entity>(entity: T) {
    return apiClient.patch(this.endpoint + "/" + entity.id, entity);
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
