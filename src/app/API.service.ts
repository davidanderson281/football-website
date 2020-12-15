/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateFootballGameInput = {
  id?: string | null;
  name: string;
  time: string;
  location: string;
};

export type ModelFootballGameConditionInput = {
  name?: ModelStringInput | null;
  time?: ModelStringInput | null;
  location?: ModelStringInput | null;
  and?: Array<ModelFootballGameConditionInput | null> | null;
  or?: Array<ModelFootballGameConditionInput | null> | null;
  not?: ModelFootballGameConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateFootballGameInput = {
  id: string;
  name?: string | null;
  time?: string | null;
  location?: string | null;
};

export type DeleteFootballGameInput = {
  id?: string | null;
};

export type ModelFootballGameFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  time?: ModelStringInput | null;
  location?: ModelStringInput | null;
  and?: Array<ModelFootballGameFilterInput | null> | null;
  or?: Array<ModelFootballGameFilterInput | null> | null;
  not?: ModelFootballGameFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type CreateFootballGameMutation = {
  __typename: "FootballGame";
  id: string;
  name: string;
  time: string;
  location: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFootballGameMutation = {
  __typename: "FootballGame";
  id: string;
  name: string;
  time: string;
  location: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteFootballGameMutation = {
  __typename: "FootballGame";
  id: string;
  name: string;
  time: string;
  location: string;
  createdAt: string;
  updatedAt: string;
};

export type GetFootballGameQuery = {
  __typename: "FootballGame";
  id: string;
  name: string;
  time: string;
  location: string;
  createdAt: string;
  updatedAt: string;
};

export type ListFootballGamesQuery = {
  __typename: "ModelFootballGameConnection";
  items: Array<{
    __typename: "FootballGame";
    id: string;
    name: string;
    time: string;
    location: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateFootballGameSubscription = {
  __typename: "FootballGame";
  id: string;
  name: string;
  time: string;
  location: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateFootballGameSubscription = {
  __typename: "FootballGame";
  id: string;
  name: string;
  time: string;
  location: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteFootballGameSubscription = {
  __typename: "FootballGame";
  id: string;
  name: string;
  time: string;
  location: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateFootballGame(
    input: CreateFootballGameInput,
    condition?: ModelFootballGameConditionInput
  ): Promise<CreateFootballGameMutation> {
    const statement = `mutation CreateFootballGame($input: CreateFootballGameInput!, $condition: ModelFootballGameConditionInput) {
        createFootballGame(input: $input, condition: $condition) {
          __typename
          id
          name
          time
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFootballGameMutation>response.data.createFootballGame;
  }
  async UpdateFootballGame(
    input: UpdateFootballGameInput,
    condition?: ModelFootballGameConditionInput
  ): Promise<UpdateFootballGameMutation> {
    const statement = `mutation UpdateFootballGame($input: UpdateFootballGameInput!, $condition: ModelFootballGameConditionInput) {
        updateFootballGame(input: $input, condition: $condition) {
          __typename
          id
          name
          time
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFootballGameMutation>response.data.updateFootballGame;
  }
  async DeleteFootballGame(
    input: DeleteFootballGameInput,
    condition?: ModelFootballGameConditionInput
  ): Promise<DeleteFootballGameMutation> {
    const statement = `mutation DeleteFootballGame($input: DeleteFootballGameInput!, $condition: ModelFootballGameConditionInput) {
        deleteFootballGame(input: $input, condition: $condition) {
          __typename
          id
          name
          time
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFootballGameMutation>response.data.deleteFootballGame;
  }
  async GetFootballGame(id: string): Promise<GetFootballGameQuery> {
    const statement = `query GetFootballGame($id: ID!) {
        getFootballGame(id: $id) {
          __typename
          id
          name
          time
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFootballGameQuery>response.data.getFootballGame;
  }
  async ListFootballGames(
    filter?: ModelFootballGameFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFootballGamesQuery> {
    const statement = `query ListFootballGames($filter: ModelFootballGameFilterInput, $limit: Int, $nextToken: String) {
        listFootballGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            time
            location
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFootballGamesQuery>response.data.listFootballGames;
  }
  OnCreateFootballGameListener: Observable<
    SubscriptionResponse<OnCreateFootballGameSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateFootballGame {
        onCreateFootballGame {
          __typename
          id
          name
          time
          location
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateFootballGameSubscription>>;

  OnUpdateFootballGameListener: Observable<
    SubscriptionResponse<OnUpdateFootballGameSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateFootballGame {
        onUpdateFootballGame {
          __typename
          id
          name
          time
          location
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateFootballGameSubscription>>;

  OnDeleteFootballGameListener: Observable<
    SubscriptionResponse<OnDeleteFootballGameSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFootballGame {
        onDeleteFootballGame {
          __typename
          id
          name
          time
          location
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteFootballGameSubscription>>;
}
