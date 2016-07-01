'use strict';

export type Action =
{
    type: 'sort/change-algo',
    id: string,
} |
{
   type: 'sort/sort' 
} |
{
    type: 'sort/change-values',
    values: array,
};