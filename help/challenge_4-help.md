# Challenge 4 Help

## Updating Your Fork

**aka** Merging an upstream repository into your fork

`git pull` by default merges your currently checked out, _local_ branch with the _remote_ branch your created your _local_ branch from.

When completing a `git pull`, you can specify exactly what _remote_ repository and branch you want to merge from by specifically a _remote origin_.

> Think about what's happening. You are _cloning_ files/folders. The place you're cloning them from is called the _origin_. When you `git pull`, you can _pull_ files/folders from any _origin_ you'd like, not only the original origin. For this exercise, you want to _pull_ from the blessed repository instead of from your original fork origin.

You can specify which _origin_ you want to _pull_ from in the pull command. The following will pull from the original _origin_'s _master_ branch.

```bash
git pull origin master
```

You can change which _origin_ is used by specifying the repository you'd like to pull from in the command:

```bash
git pull https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git BRANCH_NAME
```

- [GitHub reference](https://help.github.com/articles/merging-an-upstream-repository-into-your-fork/)