// This file is auto-generated by @hey-api/openapi-ts
import type { CancelablePromise } from "./core/CancelablePromise";
import { OpenAPI } from "./core/OpenAPI";
import { request as __request } from "./core/request";
import type {
  NextRunDatasetsUiNextRunDatasetsDagIdGetData,
  NextRunDatasetsUiNextRunDatasetsDagIdGetResponse,
  GetDagsPublicDagsGetData,
  GetDagsPublicDagsGetResponse,
} from "./types.gen";

export class DatasetService {
  /**
   * Next Run Datasets
   * @param data The data for the request.
   * @param data.dagId
   * @returns unknown Successful Response
   * @throws ApiError
   */
  public static nextRunDatasetsUiNextRunDatasetsDagIdGet(
    data: NextRunDatasetsUiNextRunDatasetsDagIdGetData,
  ): CancelablePromise<NextRunDatasetsUiNextRunDatasetsDagIdGetResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/ui/next_run_datasets/{dag_id}",
      path: {
        dag_id: data.dagId,
      },
      errors: {
        422: "Validation Error",
      },
    });
  }
}

export class DagService {
  /**
   * Get Dags
   * Get all DAGs.
   * @param data The data for the request.
   * @param data.limit
   * @param data.offset
   * @param data.tags
   * @param data.dagIdPattern
   * @param data.onlyActive
   * @param data.paused
   * @param data.orderBy
   * @returns DAGCollectionResponse Successful Response
   * @throws ApiError
   */
  public static getDagsPublicDagsGet(
    data: GetDagsPublicDagsGetData = {},
  ): CancelablePromise<GetDagsPublicDagsGetResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/public/dags",
      query: {
        limit: data.limit,
        offset: data.offset,
        tags: data.tags,
        dag_id_pattern: data.dagIdPattern,
        only_active: data.onlyActive,
        paused: data.paused,
        order_by: data.orderBy,
      },
      errors: {
        422: "Validation Error",
      },
    });
  }
}