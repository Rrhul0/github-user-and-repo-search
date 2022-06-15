import { Link } from 'react-router-dom'
import { parseJSON, formatDistanceToNow } from 'date-fns'

export default function ShowRepo({ repo }) {
    // const test = {
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
    // console.log(parseJSON(test.updated_at))
    return (
        <div className='border-2 rounded-md my-1 p-2'>
            <Link to={'/repo/' + test.id} className='text-lg text-blue-500 hover:underline'>
                <h3>
                    {repo.owner.login + '/'}
                    <span className=' font-semibold'>{repo.name}</span>
                </h3>
            </Link>
            <div>{repo.description}</div>
            <div id='topicsButtons' className='flex gap-2 items-start my-1'>
                {repo.topics.map(topic => (
                    <Link
                        to={'/topic/' + topic}
                        key={topic}
                        className='bg-stone-200 text-blue-500 text-sm rounded-xl py-0.5 px-2 hover:bg-blue-500 hover:text-white'>
                        {topic}
                    </Link>
                ))}
            </div>
            <div id='otherInfo' className='flex gap-5 text-sm'>
                <div className='flex gap-1'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={1.2}>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                        />
                    </svg>
                    <div>{repo.stargazers_count}</div>
                </div>
                <div>{repo.language}</div>
                <div>{repo.license.name}</div>
                <div>{'Updated ' + formatDistanceToNow(parseJSON(repo.updated_at), { addSuffix: true })}</div>
            </div>
        </div>
    )
}
