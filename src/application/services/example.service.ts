import ExampleFactory from "../../domain/factory/example.factory";

import type { IExampleRepository } from "../../domain/interfaces/repositories/exampleRepository.interface";
import type { Example } from "../../domain/types/example.type";
import type { Callbacks } from "../../domain/types/common.type";

export default class ExampleService {
  private _exampleRepository: IExampleRepository;
  constructor(exampleRepository: IExampleRepository) {
    this._exampleRepository = exampleRepository;
  }

  public getAll(callbacks: Callbacks) {
    const { onSuccess, onError } = callbacks;
    try {
      this._exampleRepository
        .getAll()
        .then((res: any) => {
          onSuccess(res);
        })
        .catch((err: any) => {
          onError(err);
        });
    } catch (error: any) {
      onError(error);
    }
  }

  public getById(id: number, callbacks: Callbacks) {
    const { onSuccess, onError } = callbacks;
    try {
      const res: any = this._exampleRepository.getById(id);
      const newExample = ExampleFactory.createExample(
        res.id,
        res.firstName,
        res.legalName,
        res.middleName,
        res.paternalSurname,
        res.maternalSurname
      );
      onSuccess(newExample);
    } catch (error: any) {
      onError(error);
    }
  }

  public update(example: Example, callbacks: Callbacks) {
    const { onSuccess, onError } = callbacks;
    try {
      const res: any = this._exampleRepository.update(example);
      onSuccess(res);
    } catch (error: any) {
      onError(error);
    }
  }

  public create(example: Example, callbacks: Callbacks) {
    const { onSuccess, onError } = callbacks;
    try {
      const res: any = this._exampleRepository.create(example);
      onSuccess(res);
    } catch (error: any) {
      onError(error);
    }
  }

  public _delete(example: Example, callbacks: Callbacks) {
    const { onSuccess, onError } = callbacks;
    try {
      const res: any = this._exampleRepository._delete(example);
      onSuccess(res);
    } catch (error: any) {
      onError(error);
    }
  }
}
