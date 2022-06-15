import { useSearchParams } from 'react-router-dom'
import FilterBlock from './components/filterBlock'
import FilterItems from './components/filterItems'
import ShowRepo from './components/showRepo'
import ShowUser from './components/showUser'

export default function Search() {
    const [query, setQuery] = useSearchParams('')

    const searchQuery = query.get('q')
    const repos = [] // todo...
    const users = []
    return (
        <div id='body' className='flex gap-2 h-screen p-2'>
            <div
                id='sideFilterBar'
                className='flex flex-col gap-2 rounded-xl border-2 border-stone-500 basis-1/5 p-2 overflow-scroll'>
                <div id='repoFilter' className='rounded-xl border-2 border-stone-400 p-2'>
                    <h4>Repositories Filter</h4>
                    <FilterItems items={['Repositories']} type='checkbox' name='repo' />
                    <div className='border-2 rounded-md'>
                        {/* <h4>Filter</h4> */}
                        <FilterBlock
                            name='Languages'
                            items={['Python', 'Javascript', 'Java', 'C++', 'Rust', 'Kotlin', 'Shift']}
                            type='checkbox'
                        />
                        <FilterBlock
                            name='Forks Counts'
                            items={['Any', '0-10', '11-25', '26-50', '51-100', '101-500', '501-1000', 'more then 1000']}
                            type='radio'
                        />
                        <FilterBlock
                            name='Star Counts'
                            items={['Any', '0-10', '11-25', '26-50', '51-100', '101-500', '501-1000', 'more then 1000']}
                            type='radio'
                        />
                        <FilterBlock
                            name='Created Time'
                            items={[
                                'Today',
                                'Yesterday',
                                'Last 7 Days',
                                'This Month',
                                'This Year',
                                'Last Year',
                                'Last 5 Years',
                                'Last 10 Years',
                                'Older then 10 Years',
                            ]}
                            type='radio'
                        />
                        <FilterBlock
                            name='Updated Time'
                            items={[
                                'This Hour',
                                'Last Hour',
                                'Last 5 Hours',
                                'Today',
                                'Yesterday',
                                'Last 7 Days',
                                'This Month',
                                'This Year',
                                'Last Year',
                                'Last 5 Years',
                                'Last 10 Years',
                                'Older then 10 Years',
                            ]}
                            type='radio'
                        />
                    </div>
                </div>
                <div id='userFilter' className='rounded-xl border-2 border-stone-400 p-2'>
                    <h4>Users Filters</h4>
                    <FilterItems items={['Users']} type='checkbox' name='users' />
                    <div className='border-2 rounded-md'>
                        <FilterBlock name='Type' items={['Organisation', 'User']} type='checkbox' />
                        <FilterBlock
                            name='Repositories Count'
                            items={['0-2', '3-10', '11-25', '26-50', '51-100', '101-500', 'More then 500']}
                            type='radio'
                        />
                        <FilterBlock
                            name='Followers'
                            items={['0-2', '3-10', '11-25', '26-50', '51-100', '101-500', 'More then 500']}
                            type='radio'
                        />
                        <FilterBlock
                            name='Following'
                            items={['0-2', '3-10', '11-25', '26-50', '51-100', '101-500', 'More then 500']}
                            type='radio'
                        />
                        <FilterBlock
                            name='Gists Count'
                            items={['0-2', '3-10', '11-25', '26-50', '51-100', '101-500', 'More then 500']}
                            type='radio'
                        />
                        <FilterBlock
                            name='Created Time'
                            items={[
                                'Today',
                                'Yesterday',
                                'Last 7 Days',
                                'This Month',
                                'This Year',
                                'Last Year',
                                'Last 5 Years',
                                'Last 10 Years',
                                'Older then 10 Years',
                            ]}
                            type='radio'
                        />
                        <FilterBlock
                            name='Updated Time'
                            items={[
                                'This Hour',
                                'Last Hour',
                                'Last 5 Hours',
                                'Today',
                                'Yesterday',
                                'Last 7 Days',
                                'This Month',
                                'This Year',
                                'Last Year',
                                'Last 5 Years',
                                'Last 10 Years',
                                'Older then 10 Years',
                            ]}
                            type='radio'
                        />
                    </div>
                </div>
            </div>
            <div id='mainSection' className='flex-auto rounded-xl border-2 border-stone-500 p-4'>
                <form className='border-2 focus-within:border-purple-500 rounded-xl w-fit overflow-hidden pl-2 m-auto'>
                    <input type='text' name='q' className='focus-within:outline-none text-base w-96' />
                    <button className='bg-stone-400 m-1 rounded-xl p-1'>Search</button>
                </form>
                <div id='section' className='border-b-2 border-stone-500 mt-4'></div>
                <div id='showResults'>
                    <div id='showRepos'>
                        {repos.map(repo => (
                            <ShowRepo key={repo.id} repo={repo} />
                        ))}
                    </div>
                    <div id='showUsers'>
                        {users.map(user => (
                            <ShowUser key={user.login} user={user} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

// const testRepo = {
//     id: 10270250,
//     node_id: 'MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==',
//     name: 'react',
//     full_name: 'facebook/react',
//     private: false,
//     owner: {
//         login: 'facebook',
//         id: 69631,
//         node_id: 'MDEyOk9yZ2FuaXphdGlvbjY5NjMx',
//         avatar_url: 'https://avatars.githubusercontent.com/u/69631?v=4',
//         gravatar_id: '',
//         url: 'https://api.github.com/users/facebook',
//         html_url: 'https://github.com/facebook',
//         followers_url: 'https://api.github.com/users/facebook/followers',
//         following_url: 'https://api.github.com/users/facebook/following{/other_user}',
//         gists_url: 'https://api.github.com/users/facebook/gists{/gist_id}',
//         starred_url: 'https://api.github.com/users/facebook/starred{/owner}{/repo}',
//         subscriptions_url: 'https://api.github.com/users/facebook/subscriptions',
//         organizations_url: 'https://api.github.com/users/facebook/orgs',
//         repos_url: 'https://api.github.com/users/facebook/repos',
//         events_url: 'https://api.github.com/users/facebook/events{/privacy}',
//         received_events_url: 'https://api.github.com/users/facebook/received_events',
//         type: 'Organization',
//         site_admin: false,
//     },
//     html_url: 'https://github.com/facebook/react',
//     description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
//     fork: false,
//     url: 'https://api.github.com/repos/facebook/react',
//     forks_url: 'https://api.github.com/repos/facebook/react/forks',
//     keys_url: 'https://api.github.com/repos/facebook/react/keys{/key_id}',
//     collaborators_url: 'https://api.github.com/repos/facebook/react/collaborators{/collaborator}',
//     teams_url: 'https://api.github.com/repos/facebook/react/teams',
//     hooks_url: 'https://api.github.com/repos/facebook/react/hooks',
//     issue_events_url: 'https://api.github.com/repos/facebook/react/issues/events{/number}',
//     events_url: 'https://api.github.com/repos/facebook/react/events',
//     assignees_url: 'https://api.github.com/repos/facebook/react/assignees{/user}',
//     branches_url: 'https://api.github.com/repos/facebook/react/branches{/branch}',
//     tags_url: 'https://api.github.com/repos/facebook/react/tags',
//     blobs_url: 'https://api.github.com/repos/facebook/react/git/blobs{/sha}',
//     git_tags_url: 'https://api.github.com/repos/facebook/react/git/tags{/sha}',
//     git_refs_url: 'https://api.github.com/repos/facebook/react/git/refs{/sha}',
//     trees_url: 'https://api.github.com/repos/facebook/react/git/trees{/sha}',
//     statuses_url: 'https://api.github.com/repos/facebook/react/statuses/{sha}',
//     languages_url: 'https://api.github.com/repos/facebook/react/languages',
//     stargazers_url: 'https://api.github.com/repos/facebook/react/stargazers',
//     contributors_url: 'https://api.github.com/repos/facebook/react/contributors',
//     subscribers_url: 'https://api.github.com/repos/facebook/react/subscribers',
//     subscription_url: 'https://api.github.com/repos/facebook/react/subscription',
//     commits_url: 'https://api.github.com/repos/facebook/react/commits{/sha}',
//     git_commits_url: 'https://api.github.com/repos/facebook/react/git/commits{/sha}',
//     comments_url: 'https://api.github.com/repos/facebook/react/comments{/number}',
//     issue_comment_url: 'https://api.github.com/repos/facebook/react/issues/comments{/number}',
//     contents_url: 'https://api.github.com/repos/facebook/react/contents/{+path}',
//     compare_url: 'https://api.github.com/repos/facebook/react/compare/{base}...{head}',
//     merges_url: 'https://api.github.com/repos/facebook/react/merges',
//     archive_url: 'https://api.github.com/repos/facebook/react/{archive_format}{/ref}',
//     downloads_url: 'https://api.github.com/repos/facebook/react/downloads',
//     issues_url: 'https://api.github.com/repos/facebook/react/issues{/number}',
//     pulls_url: 'https://api.github.com/repos/facebook/react/pulls{/number}',
//     milestones_url: 'https://api.github.com/repos/facebook/react/milestones{/number}',
//     notifications_url: 'https://api.github.com/repos/facebook/react/notifications{?since,all,participating}',
//     labels_url: 'https://api.github.com/repos/facebook/react/labels{/name}',
//     releases_url: 'https://api.github.com/repos/facebook/react/releases{/id}',
//     deployments_url: 'https://api.github.com/repos/facebook/react/deployments',
//     created_at: '2013-05-24T16:15:54Z',
//     updated_at: '2022-06-15T15:24:57Z',
//     pushed_at: '2022-06-15T07:28:21Z',
//     git_url: 'git://github.com/facebook/react.git',
//     ssh_url: 'git@github.com:facebook/react.git',
//     clone_url: 'https://github.com/facebook/react.git',
//     svn_url: 'https://github.com/facebook/react',
//     homepage: 'https://reactjs.org',
//     size: 180111,
//     stargazers_count: 189570,
//     watchers_count: 189570,
//     language: 'JavaScript',
//     has_issues: true,
//     has_projects: true,
//     has_downloads: true,
//     has_wiki: true,
//     has_pages: true,
//     forks_count: 39105,
//     mirror_url: null,
//     archived: false,
//     disabled: false,
//     open_issues_count: 970,
//     license: {
//         key: 'mit',
//         name: 'MIT License',
//         spdx_id: 'MIT',
//         url: 'https://api.github.com/licenses/mit',
//         node_id: 'MDc6TGljZW5zZTEz',
//     },
//     allow_forking: true,
//     is_template: false,
//     topics: ['declarative', 'frontend', 'javascript', 'library', 'react', 'ui'],
//     visibility: 'public',
//     forks: 39105,
//     open_issues: 970,
//     watchers: 189570,
//     default_branch: 'main',
//     temp_clone_token: null,
//     organization: {
//         login: 'facebook',
//         id: 69631,
//         node_id: 'MDEyOk9yZ2FuaXphdGlvbjY5NjMx',
//         avatar_url: 'https://avatars.githubusercontent.com/u/69631?v=4',
//         gravatar_id: '',
//         url: 'https://api.github.com/users/facebook',
//         html_url: 'https://github.com/facebook',
//         followers_url: 'https://api.github.com/users/facebook/followers',
//         following_url: 'https://api.github.com/users/facebook/following{/other_user}',
//         gists_url: 'https://api.github.com/users/facebook/gists{/gist_id}',
//         starred_url: 'https://api.github.com/users/facebook/starred{/owner}{/repo}',
//         subscriptions_url: 'https://api.github.com/users/facebook/subscriptions',
//         organizations_url: 'https://api.github.com/users/facebook/orgs',
//         repos_url: 'https://api.github.com/users/facebook/repos',
//         events_url: 'https://api.github.com/users/facebook/events{/privacy}',
//         received_events_url: 'https://api.github.com/users/facebook/received_events',
//         type: 'Organization',
//         site_admin: false,
//     },
//     network_count: 39105,
//     subscribers_count: 6623,
// }
// const testUser = {
//     login: 'acdlite',
//     id: 3624098,
//     node_id: 'MDQ6VXNlcjM2MjQwOTg=',
//     avatar_url: 'https://avatars.githubusercontent.com/u/3624098?v=4',
//     gravatar_id: '',
//     url: 'https://api.github.com/users/acdlite',
//     html_url: 'https://github.com/acdlite',
//     followers_url: 'https://api.github.com/users/acdlite/followers',
//     following_url: 'https://api.github.com/users/acdlite/following{/other_user}',
//     gists_url: 'https://api.github.com/users/acdlite/gists{/gist_id}',
//     starred_url: 'https://api.github.com/users/acdlite/starred{/owner}{/repo}',
//     subscriptions_url: 'https://api.github.com/users/acdlite/subscriptions',
//     organizations_url: 'https://api.github.com/users/acdlite/orgs',
//     repos_url: 'https://api.github.com/users/acdlite/repos',
//     events_url: 'https://api.github.com/users/acdlite/events{/privacy}',
//     received_events_url: 'https://api.github.com/users/acdlite/received_events',
//     type: 'User',
//     site_admin: false,
//     name: 'Andrew Clark',
//     company: '@facebook',
//     blog: '',
//     location: null,
//     email: null,
//     hireable: null,
//     bio: 'React core at Facebook. Hi!',
//     twitter_username: 'acdlite',
//     public_repos: 71,
//     public_gists: 20,
//     followers: 9866,
//     following: 0,
//     created_at: '2013-02-18T08:08:56Z',
//     updated_at: '2022-02-21T05:55:21Z',
// }
