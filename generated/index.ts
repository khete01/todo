// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createItem: Todo;
  deleteItem?: Maybe<Scalars['Boolean']['output']>;
  updateItem?: Maybe<Todo>;
};


export type MutationCreateItemArgs = {
  status: TodoStatus;
  title: Scalars['String']['input'];
};


export type MutationDeleteItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateItemArgs = {
  id: Scalars['ID']['input'];
  status?: InputMaybe<TodoStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  getTodo?: Maybe<Todo>;
  getTodos: Array<Todo>;
};


export type QueryGetTodoArgs = {
  id: Scalars['ID']['input'];
};

export type Todo = {
  __typename?: 'Todo';
  _id: Scalars['ID']['output'];
  status: TodoStatus;
  title: Scalars['String']['output'];
};

export enum TodoStatus {
  Done = 'DONE',
  Pending = 'PENDING'
}

export type GetAllTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTodosQuery = { __typename?: 'Query', getTodos: Array<{ __typename?: 'Todo', _id: string, status: TodoStatus, title: string }> };

export type GetSingleTodoQueryVariables = Exact<{
  todoId: Scalars['ID']['input'];
}>;


export type GetSingleTodoQuery = { __typename?: 'Query', getTodo?: { __typename?: 'Todo', _id: string, status: TodoStatus, title: string } | null };

export type CreateTodoMutationVariables = Exact<{
  newTodoTitle: Scalars['String']['input'];
  newTodoStatus: TodoStatus;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createItem: { __typename?: 'Todo', _id: string, status: TodoStatus, title: string } };

export type DeleteTodoItemMutationVariables = Exact<{
  deleteTodoId: Scalars['ID']['input'];
}>;


export type DeleteTodoItemMutation = { __typename?: 'Mutation', deleteItem?: boolean | null };

export type UpdateTodoMutationVariables = Exact<{
  updateTodoId: Scalars['ID']['input'];
  updatedTitle?: InputMaybe<Scalars['String']['input']>;
  updatedStatus?: InputMaybe<TodoStatus>;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateItem?: { __typename?: 'Todo', _id: string, status: TodoStatus, title: string } | null };


export const GetAllTodosDocument = gql`
    query GetAllTodos {
  getTodos {
    _id
    status
    title
  }
}
    `;
export type GetAllTodosProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllTodosQuery, GetAllTodosQueryVariables>
    } & TChildProps;
export function withGetAllTodos<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllTodosQuery,
  GetAllTodosQueryVariables,
  GetAllTodosProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllTodosQuery, GetAllTodosQueryVariables, GetAllTodosProps<TChildProps, TDataName>>(GetAllTodosDocument, {
      alias: 'getAllTodos',
      ...operationOptions
    });
};

/**
 * __useGetAllTodosQuery__
 *
 * To run a query within a React component, call `useGetAllTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTodosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTodosQuery, GetAllTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTodosQuery, GetAllTodosQueryVariables>(GetAllTodosDocument, options);
      }
export function useGetAllTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTodosQuery, GetAllTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTodosQuery, GetAllTodosQueryVariables>(GetAllTodosDocument, options);
        }
export function useGetAllTodosSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllTodosQuery, GetAllTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllTodosQuery, GetAllTodosQueryVariables>(GetAllTodosDocument, options);
        }
export type GetAllTodosQueryHookResult = ReturnType<typeof useGetAllTodosQuery>;
export type GetAllTodosLazyQueryHookResult = ReturnType<typeof useGetAllTodosLazyQuery>;
export type GetAllTodosSuspenseQueryHookResult = ReturnType<typeof useGetAllTodosSuspenseQuery>;
export type GetAllTodosQueryResult = Apollo.QueryResult<GetAllTodosQuery, GetAllTodosQueryVariables>;
export const GetSingleTodoDocument = gql`
    query GetSingleTodo($todoId: ID!) {
  getTodo(id: $todoId) {
    _id
    status
    title
  }
}
    `;
export type GetSingleTodoProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetSingleTodoQuery, GetSingleTodoQueryVariables>
    } & TChildProps;
export function withGetSingleTodo<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetSingleTodoQuery,
  GetSingleTodoQueryVariables,
  GetSingleTodoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetSingleTodoQuery, GetSingleTodoQueryVariables, GetSingleTodoProps<TChildProps, TDataName>>(GetSingleTodoDocument, {
      alias: 'getSingleTodo',
      ...operationOptions
    });
};

/**
 * __useGetSingleTodoQuery__
 *
 * To run a query within a React component, call `useGetSingleTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSingleTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSingleTodoQuery({
 *   variables: {
 *      todoId: // value for 'todoId'
 *   },
 * });
 */
export function useGetSingleTodoQuery(baseOptions: Apollo.QueryHookOptions<GetSingleTodoQuery, GetSingleTodoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSingleTodoQuery, GetSingleTodoQueryVariables>(GetSingleTodoDocument, options);
      }
export function useGetSingleTodoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSingleTodoQuery, GetSingleTodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSingleTodoQuery, GetSingleTodoQueryVariables>(GetSingleTodoDocument, options);
        }
export function useGetSingleTodoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSingleTodoQuery, GetSingleTodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSingleTodoQuery, GetSingleTodoQueryVariables>(GetSingleTodoDocument, options);
        }
export type GetSingleTodoQueryHookResult = ReturnType<typeof useGetSingleTodoQuery>;
export type GetSingleTodoLazyQueryHookResult = ReturnType<typeof useGetSingleTodoLazyQuery>;
export type GetSingleTodoSuspenseQueryHookResult = ReturnType<typeof useGetSingleTodoSuspenseQuery>;
export type GetSingleTodoQueryResult = Apollo.QueryResult<GetSingleTodoQuery, GetSingleTodoQueryVariables>;
export const CreateTodoDocument = gql`
    mutation CreateTodo($newTodoTitle: String!, $newTodoStatus: TodoStatus!) {
  createItem(title: $newTodoTitle, status: $newTodoStatus) {
    _id
    status
    title
  }
}
    `;
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;
export type CreateTodoProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>
    } & TChildProps;
export function withCreateTodo<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateTodoMutation,
  CreateTodoMutationVariables,
  CreateTodoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateTodoMutation, CreateTodoMutationVariables, CreateTodoProps<TChildProps, TDataName>>(CreateTodoDocument, {
      alias: 'createTodo',
      ...operationOptions
    });
};

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      newTodoTitle: // value for 'newTodoTitle'
 *      newTodoStatus: // value for 'newTodoStatus'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, options);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const DeleteTodoItemDocument = gql`
    mutation DeleteTodoItem($deleteTodoId: ID!) {
  deleteItem(id: $deleteTodoId)
}
    `;
export type DeleteTodoItemMutationFn = Apollo.MutationFunction<DeleteTodoItemMutation, DeleteTodoItemMutationVariables>;
export type DeleteTodoItemProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteTodoItemMutation, DeleteTodoItemMutationVariables>
    } & TChildProps;
export function withDeleteTodoItem<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteTodoItemMutation,
  DeleteTodoItemMutationVariables,
  DeleteTodoItemProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteTodoItemMutation, DeleteTodoItemMutationVariables, DeleteTodoItemProps<TChildProps, TDataName>>(DeleteTodoItemDocument, {
      alias: 'deleteTodoItem',
      ...operationOptions
    });
};

/**
 * __useDeleteTodoItemMutation__
 *
 * To run a mutation, you first call `useDeleteTodoItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoItemMutation, { data, loading, error }] = useDeleteTodoItemMutation({
 *   variables: {
 *      deleteTodoId: // value for 'deleteTodoId'
 *   },
 * });
 */
export function useDeleteTodoItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoItemMutation, DeleteTodoItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoItemMutation, DeleteTodoItemMutationVariables>(DeleteTodoItemDocument, options);
      }
export type DeleteTodoItemMutationHookResult = ReturnType<typeof useDeleteTodoItemMutation>;
export type DeleteTodoItemMutationResult = Apollo.MutationResult<DeleteTodoItemMutation>;
export type DeleteTodoItemMutationOptions = Apollo.BaseMutationOptions<DeleteTodoItemMutation, DeleteTodoItemMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation UpdateTodo($updateTodoId: ID!, $updatedTitle: String, $updatedStatus: TodoStatus) {
  updateItem(id: $updateTodoId, title: $updatedTitle, status: $updatedStatus) {
    _id
    status
    title
  }
}
    `;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;
export type UpdateTodoProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>
    } & TChildProps;
export function withUpdateTodo<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateTodoMutation,
  UpdateTodoMutationVariables,
  UpdateTodoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateTodoMutation, UpdateTodoMutationVariables, UpdateTodoProps<TChildProps, TDataName>>(UpdateTodoDocument, {
      alias: 'updateTodo',
      ...operationOptions
    });
};

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      updateTodoId: // value for 'updateTodoId'
 *      updatedTitle: // value for 'updatedTitle'
 *      updatedStatus: // value for 'updatedStatus'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, options);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;