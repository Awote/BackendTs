import { NosqlPkType } from "../../db/nosql/types"
import { SqlPkType } from "../../db/sql/types"

export type Pk = SqlPkType & NosqlPkType