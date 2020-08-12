## usersテーブル
|Column|Type|Option|
|:-------|:------|:--------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many: groups, though: :users_groups
- has_many: users_groups
- has_many: messages

## groupsテーブル
|Column|Type|Option|
|:-------|:-----|:-------|
|name|string|null: false, unique: true|
### Association
- has_many: users, though: :users_groups
- has_many; users_groups
- has_many: messages

## group_usersテーブル
|Column|Type|Option|
|:-----------|------------:|:------------:|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to: user
- belongs_to: group


## messagesテーブル
|Column|Type|Option|
|:-----------|------------:|:------------:|
|text|text||
|image|image||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to: user
- belongs_to: group