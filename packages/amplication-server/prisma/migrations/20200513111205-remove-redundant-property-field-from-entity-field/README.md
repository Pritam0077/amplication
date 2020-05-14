# Migration `20200513111205-remove-redundant-property-field-from-entity-field`

This migration has been generated by Yuval Hazaz at 5/13/2020, 11:12:05 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."EntityField" DROP COLUMN "dataTypeProperties";
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200512132505..20200513111205-remove-redundant-property-field-from-entity-field
--- datamodel.dml
+++ datamodel.dml
@@ -1,13 +1,13 @@
 datasource sqlite {
   provider = "sqlite"
-  url = "***"
+  url      = "file:./dev.db"
   enabled  = false
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = env("POSTGRESQL_URL")
   enabled  = true
 }
 generator client {
@@ -118,9 +118,8 @@
   entityVersion EntityVersion
   name  String
   displayName String
   dataType  EnumDataType
-  dataTypeProperties  String // JSON representation of the properties that relates based on selected type of field
   properties  String
   required  Boolean // TBD
   searchable  Boolean // TBD
   description String // TBD
```

