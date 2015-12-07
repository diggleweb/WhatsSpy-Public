angular.module('whatsspy-translate', ['pascalprecht.translate']).
config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', {
    /* PLEASE NOTE that spaces etc. are all of importance here. You also must escape ' (by using \') */
    /* Use your gitlab/real name here to identify your work */
    TRANSLATOR: '',
    MENU_LOGIN: 'Login',
    MENU_OVERVIEW: 'Overview',
    MENU_COMPARE: 'Compare',
    MENU_TIMELINE: 'Timeline',
    MENU_STATS: 'Statistics',
    MENU_ABOUT: 'About / Help',
    MENU_USER: 'Public user',
    MENU_GROUP: 'Public group',
    MENU_LOADING: 'Loading new data ...',
    MENU_STATUS: 'status',
    MENU_TRACKER_ONLINE: 'Tracker online',
    MENU_TRACKER_OFFLINE: 'Tracker offline',
    MENU_TRACKER_NOAUTH: 'not authenticated',
    MENU_TRACKER_USERS: 'users',
    MENU_TRACKER_REFRESH: 'Click to refresh the data loaded into the web-app.',
    MENU_POC: 'Proof of Concept',
    FOOTER_VERSION: 'Version',
    FOOTER_V_BEHIND: 'Behind',
    LOGIN_WELCOME: 'Welcome!',
    LOGIN_WELCOME_MSG: 'Welcome to the WhatsSpy Public PoC! Before you start tracking please read the',
    LOGIN_LICENSE: 'license',
    LOGIN_LOGIN_HEAD: 'Login',
    LOGIN_AUTH_NOTIFY: 'It seems you are not yet authenticated. Please login to view and manage the tracker.',
    LOGIN_PASS_FIELD: 'Password',
    LOGIN_SIGN_IN_BTN: 'Sign in',
    LOGIN_RESET_BTN: 'Reset',
    LOGIN_PASS_PLACEHOLDER: 'password ...',
    TOKEN_INVALID: 'Invalid token:',
    OVERVIEW_TOKEN_INVALID: 'You are not allowed to view this user because the token is or became invalid.',
    OVERVIEW_TOKEN_INFO_STRONG: 'Shared user profile:',
    OVERVIEW_TOKEN_INFO: 'This is a shared user profile created by the hoster of this WhatsSpy Public instance. The timeline contains just a snapshot of the last statusess.',
    OVERVIEW_FILTERS: 'Filters',
    OVERVIEW_FILTER_PHONE: 'Search by phone number ...',
    OVERVIEW_FILTER_NAME_TITLE: 'Use name|name to filter on multiple names.',
    OVERVIEW_FILTER_NAME: 'Search by name ...',
    OVERVIEW_INFO_STATUS: 'The system is checking all statuses',
    OVERVIEW_INFO_STATUS_FROM: 'from',
    OVERVIEW_INFO_STATUS_CONTACTS: 'contacts',
    OVERVIEW_INFO_STATUS_SINCE: 'since',
    OVERVIEW_INFO_PRIV: 'Contacts that have "last seen" set to "nobody" will be',
    OVERVIEW_INFO_PRIV_LINK: 'tracked anyway',
    OVERVIEW_INFO_LIVE: 'The information on this page is not live, you can refresh this page by clicking the gray timestamp in the "status" panel.',
    OVERVIEW_INFO_TIMESPAN: 'Beside the timeline, all information is from since you started tracking this contact (unless noted otherwise).',
    OVERVIEW_INFO_VERIFY: 'contacts will be verified within 5-10 minutes,',
    OVERVIEW_INFO_RELOAD: 'reload data',
    OVERVIEW_INFO_RELOAD_2: 'to check again.',
    OVERVIEW_ADD: 'Add Contact',
    OVERVIEW_IMPORT: 'Import Google Contacts',
    OVERVIEW_MANAGE_GROUPS: 'Manage groups',
    OVERVIEW_MANAGE_PERF: 'Performance options',
    OVERVIEW_EXPAND: 'Expand view',
    OVERVIEW_COLLAPSE: 'Collapse view',
    OVERVIEW_EDIT: 'Edit',
    OVERVIEW_CONTACT_SINCE: 'tracking since',
    OVERVIEW_CONTACT_LASTSEEN: 'last seen',
    OVERVIEW_CONTACT_NOTIF: 'notifications enabled',
    OVERVIEW_CONTACT_SHARING: 'profile sharing enabled',
    OVERVIEW_NO_INFO: 'No information available ..',
    OVERVIEW_CLICK_LOAD: 'Click to load data',
    OVERVIEW_CLICK_LOAD_TIMELINE: 'Load timeline',
    OVERVIEW_CONTACT_H_ANALYTICS: 'Analytics / Information',
    OVERVIEW_CONTACT_ANALYTICS_OVERVIEW: 'Overview',
    OVERVIEW_CONTACT_ANALYTICS_OPENOVERVIEW: 'Opened overview',
    OVERVIEW_CONTACT_ANALYTICS_TIME_OVERVIEW: 'Time overview',
    OVERVIEW_CONTACT_ANALYTICS_STATUS: 'Status Messages',
    OVERVIEW_CONTACT_ANALYTICS_PICS: 'Profile pictures',
    OVERVIEW_CONTACT_OPENED_H: 'Opened WhatsApp client',
    OVERVIEW_CONTACT_TABLE_1D: '(24h) today',
    OVERVIEW_CONTACT_TABLE_7D: '(07d) last 7 days',
    OVERVIEW_CONTACT_TABLE_14D: '(14d) last two weeks',
    OVERVIEW_CONTACT_TABLE_31D: '(31d) last month',
    OVERVIEW_CONTACT_TABLE_xD: '(---) all time',
    OVERVIEW_CONTACT_TRACKING_SINCE: 'Tracking since',
    OVERVIEW_CONTACT_TIME_SPENT_WA: 'Time spent on WhatsApp',
    OVERVIEW_CONTACT_LOADING_INFO: 'Loading information ...',
    OVERVIEW_CONTACT_SWITCH_HOUR_VIEW: 'Show per hour',
    OVERVIEW_CONTACT_SWITCH_WEEKDAY_VIEW: 'Show per weekday',
    OVERVIEW_CONTACT_H_OPENING_WA_WEEKDAY: 'Opening WhatsApp per weekday',
    OVERVIEW_CONTACT_H_OPENING_WA_HOUR: 'Opening WhatsApp per hour',
    OVERVIEW_CONTACT_H_TIME_WA_WEEKDAY: 'Time on WhatsApp per weekday',
    OVERVIEW_CONTACT_H_TIME_WA_HOUR: 'Time on WhatsApp per hour',
    OVERVIEW_CONTACT_H_PRIV_STATUS: 'Privacy / Online status',
    OVERVIEW_CONTACT_PRIV_STATUS: 'Privacy',
    OVERVIEW_CONTACT_ONLINE_EVENTS: 'Online events',
    OVERVIEW_CONTACT_H_LASTSEEN: 'Last seen',
    OVERVIEW_PRIVACY_SETTINGS_PUBLIC: 'everyone',
    OVERVIEW_PRIVACY_SETTINGS_FRIENDS: 'contacts*',
    OVERVIEW_PRIVACY_LAST_CHANGE: 'changed to',
    OVERVIEW_PRIVACY_LAST_CHANGE_AT: 'at',
    OVERVIEW_PRIVACY_H_PROF_PIC: 'Profile pic',
    OVERVIEW_PRIVACY_H_STATUS: 'Status messages',
    OVERVIEW_PRIVACY_TRACK_NOTICE: 'Profile picture and status message are checked every 2 hours.',
    OVERVIEW_PRIVACY_ASSUMPTION: 'Assuming this user does not have the tracker number in his contact list. If this is the case \'contacts only\' will be interpreted as \'everyone\' in this view.',
    OVERVIEW_LOG_FROM: 'from',
    OVERVIEW_LOG_TILL: 'till',
    OVERVIEW_LOG_NOW: 'now',
    OVERVIEW_NO_ACC: 'No tracking accounts ..',
    OVERVIEW_ADD_CONTACT_H: 'Add contact by phone number',
    OVERVIEW_ADD_CONTACT_PHONE: 'Phone number',
    OVERVIEW_ADD_CONTACT_PLACEHOLDER_COUNTRYCODE: 'countrycode ...',
    OVERVIEW_ADD_CONTACT_PLACEHOLDER_PHONE: 'phone number ...',
    OVERVIEW_ADD_CONTACT_NAME: 'Contact name',
    OVERVIEW_ADD_CONTACT_GROUP: 'Groups',
    OVERVIEW_ADD_CONTACT_NOTICE: 'The new contact will be verified as an WhatsApp user and added to the tracker within 5-10 minutes. After this you can find the contact in the overview list.',
    OVERVIEW_ADD_CONTACT_ADD: 'Add contact',
    OVERVIEW_ADD_CONTACT_CLOSE: 'Close',
    OVERVIEW_EDIT_CONTACT_H: 'Edit contact name',
    OVERVIEW_EDIT_CONTACT_PHONE: 'Phone number',
    OVERVIEW_EDIT_CONTACT_NAME: 'Contact name',
    OVERVIEW_EDIT_CONTACT_NAME_PLACEHOLDER: '(optional) name of contact',
    OVERVIEW_EDIT_CONTACT_GROUPS: 'Groups',
    OVERVIEW_EDIT_CONTACT_PROFILESHARE: 'Share profile',
    OVERVIEW_EDIT_CONTACT_GENERATE_TOKEN: 'Generate',
    OVERVIEW_EDIT_CONTACT_RESET_TOKEN: 'Reset',
    OVERVIEW_EDIT_CONTACT_TOKEN_INFO: 'Sharing profile URL\'s will only work if WhatsSpy Public is available from the internet.',
    OVERVIEW_EDIT_CONTACT_TOKEN_INFO2: 'Click on the token to copy the link. The generation of tokens does not have to be saved.',
    OVERVIEW_EDIT_CONTACT_NOTIFICATIONS: 'Notifications',
    OVERVIEW_EDIT_CONTACT_NOTIFICATIONS_ONLINE: 'Coming online',
    OVERVIEW_EDIT_CONTACT_NOTIFICATIONS_STATUSMSG: 'Status message change',
    OVERVIEW_EDIT_CONTACT_NOTIFICATIONS_PROFPIC: 'Profile picture change',
    OVERVIEW_EDIT_CONTACT_NOTIFICATIONS_PRIV: 'Privacy setting changes',
    OVERVIEW_EDIT_CONTACT_NOTIFICATIONS_AGENTS: 'There are no notification agents configured in',
    OVERVIEW_EDIT_CONTACT_NOTIFICATIONS_AGENTS_CONFIG: 'config.php',
    OVERVIEW_EDIT_CONTACT_NOTIFICATIONS_MISSING: 'Check config.example.php in case you are missing these options.',
    OVERVIEW_EDIT_CONTACT_NOTIFICATIONS_SENDING: 'Sending notifications for user actions via',
    OVERVIEW_AND: 'and',
    OVERVIEW_EDIT_CONTACT_SHOW_TIMELINE: 'Show timeline notifications (if open)',
    OVERVIEW_EDIT_CONTACT_SHOW_TIMELINE_EXPL: 'Notification sound used in the timeline for this user.',
    OVERVIEW_EDIT_CONTACT_SAVE: 'Save contact',
    OVERVIEW_EDIT_CONTACT_INACTIVE: 'Set inactive',
    OVERVIEW_EDIT_CONTACT_DELETE: 'Delete contact (!)',
    OVERVIEW_EDIT_CONTACT_DETELE_TITLE: 'Delete all information of this contact, including any status records.',
    OVERVIEW_EDIT_CONTACT_INACTIVE_TITLE: 'Do not track the user, but keep any status/privacy records of this person. This change can take up to an hour to take effect in the tracker.',
    OVERVIEW_GROUPS_H: 'Manage Groups',
    OVERVIEW_GROUPS_EXISTING: 'Existing groups',
    OVERVIEW_GROUPS_USERS: 'Users:',
    OVERVIEW_GROUPS_STATSEN: 'Statistics sharing enabled',
    OVERVIEW_GROUPS_STATSDIS: 'Sharing disabled*',
    OVERVIEW_GROUPS_NONE: 'No groups defined yet...',
    OVERVIEW_GROUPS_SHARE: '* You can share group statistics in the "Statistics" page.',
    OVERVIEW_GROUPS_DELETE: '** Deleting the group will not delete the users in this group.',
    OVERVIEW_GROUPS_DELETEBTN: 'Delete group**',
    OVERVIEW_GROUPS_CREATE: 'Create group',
    OVERVIEW_GROUPS_CREATE_NAME: 'Group name',
    OVERVIEW_GROUPS_CREATEBTN: 'Create group',
    OVERVIEW_GROUPS_PLACEHOLDER: 'name of the group (required)',
    OVERVIEW_GROUPS_CLOSE: 'Close',
    OVERVIEW_PERFORMANCE_H: 'Manage User Interface Performance',
    OVERVIEW_PERFORMANCE_TIMELINE: 'Account timeline',
    OVERVIEW_PERFORMANCE_TIMELINE_OPTION: 'Display history:',
    OVERVIEW_PERFORMANCE_TIMELINE_EXP: 'This setting has a',
    OVERVIEW_PERFORMANCE_TIMELINE_EXP2: 'big',
    OVERVIEW_PERFORMANCE_TIMELINE_EXP3: 'performance impact when you (re)load a users timeline. This affects the overview, compare and shared profile page.',
    OVERVIEW_PERFORMANCE_TRACKER_H: 'Tracker sessions',
    OVERVIEW_PERFORMANCE_TRACKER_OPTION: 'Display in timeline',
    OVERVIEW_PERFORMANCE_TRACKER_EXP: 'This setting has a',
    OVERVIEW_PERFORMANCE_TRACKER_EXP2: 'small',
    OVERVIEW_PERFORMANCE_TRACKER_EXP3: 'performance impact when you (re)load a users timeline. This affects both the overview and compare page.',
    OVERVIEW_PERFORMANCE_SAVE: 'Save settings',
    OVERVIEW_PERFORMANCE_CLOSE: 'Close',
    COMPARE_SELECT: 'Select candidate(s)',
    COMPARE_ADD_TO_COMPARE: 'Add user to comparison',
    COMPARE_ADD: 'Add',
    COMPARE_ADD_GROUP_COMPARE: 'Add group to comparison',
    COMPARE_ADD_NOTICE: 'Loading large groups may cause a temporary browser freeze due to the vast amount of information.',
    COMPARE_CURR_LIST: 'Current candidates in the comparison:',
    COMPARE_CURR_LIST_INFO: 'Candidate / Privacy settings',
    COMPARE_LASTSEEN: 'last seen :',
    COMPARE_STATUSMSG: 'status messages :',
    COMPARE_PROFPIC: 'profile pic :',
    COMPARE_REMOVE: 'Remove',
    COMPARE_LOADING: 'Loading account information ...',
    COMPARE_CONTACTS: 'contacts*',
    COMPARE_EVERYBODY: 'everyone',
    COMPARE_CONTACTS_NOTICE: 'This privacy setting may be contacts or nobody. This can\'t be detected.',
    STATS_TOKEN_INFO: 'You are not allowed to view this group because the token is or became invalid.',
    STATS_TOKEN_GROUP: 'Shared group profile:',
    STATS_TOKEN_GROUP_INFO: 'This is a shared statistics report of the group',
    STATS_TOKEN_GROUP_INFO2: 'created by the hoster of this WhatsSpy Public instance.',
    STATS_NO_INFO: 'Not enough information available ...',
    STATS_LOADING: 'Loading information ...',
    STATS_FILTER: 'Filter options',
    STATS_NOTES: 'Notes',
    STATS_INFO_VALIDITY: 'All information on this page does not update. You can refresh by clicking the gray timestamp in "status".',
    STATS_TOKEN_GEN: 'Generate',
    STATS_TOKEN_RESET: 'Reset',
    STATS_SHARE_INFO: 'Sharing this statistics group page URL\'s will only work if WhatsSpy Public is available from the internet. Click on the token to copy the link.',
    STATS_H: 'WhatsSpy Public Statistics',
    STATS_TRACKER_STATUS: 'Tracker status',
    STATS_SESSION: 'Tracker sessions',
    STATS_FIRST_SESSION: 'First tracker session (start of information flow)',
    STATS_DB_CONTENT: 'Database content',
    STATS_NUMBER_OF_ACC: 'Number of accounts',
    STATS_ACCOUNTS: 'accounts',
    STATS_STATUSES: 'statuses',
    STATS_PROFPIC: 'profile pictures',
    STATS_STSMSG: 'status messages',
    STATS_H_ONLINE: 'Online/offline statuses gathered',
    STATS_H_TOTALTIME: 'Total time spent on WhatsApp by all contacts',
    STATS_H_PROFPICSUM: 'Profile pictures gathered',
    STATS_H_STATUSMSGSUM: 'Status messages gathered',
    STATS_H_PRIVACY: 'Privacy awareness',
    STATS_PRIVACY_H: 'Privacy settings of tracked users',
    STATS_PRIVACY_TABLE_TH1: 'Privacy option',
    STATS_PRIVACY_TABLE_TH2: 'contacts/nobody',
    STATS_PRIVACY_TABLE_TH3: 'everyone',
    STATS_PRIVACY_OPTION1: 'Lastseen*',
    STATS_PRIVACY_OPTION2: 'Status messages',
    STATS_PRIVACY_OPTION3: 'Profile pictures',
    STATS_PRIVACY_USERS: 'users',
    STATS_PRIVACY_HISTORY: 'Privacy changes while tracking',
    STATS_PRIVACY_LASTSEEN: 'Lastseen privacy changes',
    STATS_PRIVACY_CHANGE: 'changes',
    STATS_PRIVACY_PROFPIC: 'Profile picture privacy changes',
    STATS_PRIVACY_STATUSMSG: 'Status message privacy changes',
    STATS_PRIVACY_INFO1: '* The lastseen option does not protect you against tracking online/offline statuses. Check this',
    STATS_PRIVACY_INFO2: 'article',
    STATS_PRIVACY_INFO3: 'explaining the problem in detail.',
    STATS_PIE_CHART_ONLINE_TIME_H: 'WhatsApp usage (online time / opening) compared per user',
    STATS_PIE_CHART_TODAY: 'Show today',
    STATS_PIE_CHART_7DAYS: 'Show 7 days',
    STATS_PIE_CHART_14DAYS: 'Show 14 days',
    STATS_PIE_CHART_ALL: 'Show all',
    STATS_PIE_CHART_PIE_OPEN_H_ALL: 'Opening WhatsApp - All',
    STATS_PIE_CHART_PIE_OPEN_H_7DAYS: 'Opening WhatsApp - Last 7 days',
    STATS_PIE_CHART_PIE_OPEN_H_14DAYS: 'Opening WhatsApp - Last 14 days',
    STATS_PIE_CHART_PIE_OPEN_H_TODAY: 'Opening WhatsApp - Today',
    STATS_PIE_CHART_PIE_ONLINE_H_ALL: 'Online time in WhatsApp - All',
    STATS_PIE_CHART_PIE_ONLINE_H_7DAYS: 'Online time in WhatsApp - Last 7 days',
    STATS_PIE_CHART_PIE_ONLINE_H_14DAYS: 'Online time in WhatsApp - Last 14 days',
    STATS_PIE_CHART_PIE_ONLINE_H_TODAY: 'Online time in WhatsApp - Today',
    STATS_PIE_CHART_PIE_INFO: 'Please note that every online session can be off by 0-4 seconds based on WhatsApp, your machine and your network activity. This means all this data is the maximum time they spent on WhatsApp.',
    STATS_PIE_CHART_BAR_H: 'WhatsApp usage (online time / opening) compared per timeunit',
    STATS_PIE_CHART_BAR_OPEN_H_WEEKDAY: 'Opening WhatsApp per weekday',
    STATS_PIE_CHART_BAR_OPEN_H_HOUR: 'Opening WhatsApp per hour',
    STATS_PIE_CHART_BAR_SHOWHOUR: 'Show per hour',
    STATS_PIE_CHART_BAR_SHOWWEEKDAY: 'Show per weekday',
    STATS_PIE_CHART_BAR_TIME_H_WEEKDAY: 'Time on WhatsApp per weekday',
    STATS_PIE_CHART_BAR_TIME_H_HOUR: 'Time on WhatsApp per hour',
    STATS_BAR_CHART_TODAY: 'today',
    STATS_BAR_CHART_7DAYS: '7 days',
    STATS_BAR_CHART_14DAYS: '14 days',
    STATS_BAR_CHART_ALLTIME: 'all time',
    STATS_TOP_H1: 'Top',
    STATS_TOP_H2: 'tracked users',
    STATS_TOP_ALL: 'Show all',
    STATS_TOP_H3: 'most active users per day',
    STATS_TOP_DAYS_AGO: 'days ago',
    STATS_TOP_YESTERDAY: 'Yesterday',
    STATS_TOP_TODAY: 'Today',
    STATS_TOP_TRACKED_CONTACT: 'Tracked contact',
    STATS_TOP_TIME: 'Time online',
    STATS_TOP_OPENED: 'Opened WA',
    STATS_TOP_TIMES: 'times',
    STATS_TOP_H4: 'most active users in total',
    STATS_TOP_ALL: 'All',
    STATS_TOP_DAYS: 'days',
    STATS_TOP_HOURS: 'hours',
    STATS_TYPE_today: 'today',
    STATS_TYPE_yesterday: 'yesterday',
    STATS_TYPE_2days_ago: '2 days ago',
    STATS_TYPE_3days_ago: '3 days ago',
    STATS_TYPE_4days_ago: '4 days ago',
    STATS_TYPE_alltime: 'all time',
    STATS_TYPE_31days: '31 days',
    STATS_TYPE_14days: '14 days',
    STATS_TYPE_7days: '7 days',
    STATS_TYPE_24hours: '24 hours',
    TIMELINE_FILTER: 'Filters',
    TIMELINE_FILTER_PHONE_PLACEHOLDER: 'Search by phone number ...',
    TIMELINE_FILTER_NAME_PLACEHOLDER: 'Use name|name to filter on multiple names.',
    TIMELINE_SEARCH_NAME: 'Search by name ...',
    TIMELINE_INFO_STATUS: 'The system is checking all statuses',
    TIMELINE_INFO_FROM: 'from',
    TIMELINE_INFO_CONTACTS: 'contacts',
    TIMELINE_INFO_CONTINIOUS: 'continuously from',
    TIMELINE_INFO_LASTSTATUS: 'Contacts that have "last seen" set to "nobody" will be',
    TIMELINE_INFO_LASTSTATUS2: 'tracked anyway',
    TIMELINE_INFO_LIVE: 'Unlike the overview and comparison page, this information is live.',
    TIMELINE_FILTER_NOTIFY: 'Notify for any event (with filter)',
    TIMELINE_FILTER_TRACKER: 'Show tracker events',
    TIMELINE_ACTIVITY_H: 'Activity Timeline',
    TIMELINE_STATUS_H: 'Status Timeline',
    TIMELINE_ACTIVITY_TIMESPAN1: 'Activity timeline',
    TIMELINE_ACTIVITY_TIMESPAN2: 'from',
    TIMELINE_ACTIVITY_TIMESPAN3: 'till now',
    TIMELINE_ACTIVITY_TRACKERSTART: 'Tracker is now online',
    TIMELINE_ACTIVITY_TRACKERSTART_STARTED: 'started at',
    TIMELINE_ACTIVITY_TRACKERSTOP: 'Tracker is now offline',
    TIMELINE_ACTIVITY_TRACKERSTOP_SESSION: 'this session lasted from',
    TIMELINE_ACTIVITY_TRACKERSTOP_TILL: 'till',
    TIMELINE_ACTIVITY_TRACKERSTOP_REASON: 'Reason:',
    TIMELINE_ACTIVITY_TRACKERSTOP_SUPPORT: 'Support for common problems',
    TIMELINE_ACTIVITY_STATUSMSG: 'New status message for',
    TIMELINE_ACTIVITY_STATUSMSG_TO: 'changed to',
    TIMELINE_ACTIVITY_PROFPIC: 'New profile photo for',
    TIMELINE_ACTIVITY_PROFPIC_TITLE: 'Detecting profile picture changes can take 0-4 hours.',
    TIMELINE_ACTIVITY_PRIV: 'changed his privacy setting',
    TIMELINE_ACTIVITY_PRIV_OPTION: 'Privacy option',
    TIMELINE_ACTIVITY_PRIV_LASTSEEN: 'last seen',
    TIMELINE_ACTIVITY_PRIV_SETTO: 'is now set to',
    TIMELINE_ACTIVITY_PRIV_CONTACTS: 'contacts*',
    TIMELINE_ACTIVITY_PRIV_EVERYONE: 'everyone',
    TIMELINE_ACTIVITY_PRIV_CONTACTSTITLE: 'This privacy setting may be contacts or nobody. This can\'t be detected.',
    TIMELINE_ACTIVITY_PRIV_PROFPIC: 'profile picture',
    TIMELINE_ACTIVITY_PRIV_STATUSMSG: 'status messages',
    TIMELINE_ACTIVITY_NOINFO: 'No information available ..',
    TIMELINE_ACTIVITY_LOADMORE: 'Click to load 7 more days of older entries ..',
    TIMELINE_STATUS_H: 'Status timeline',
    TIMELINE_STATUS_ONLINE: 'Online from',
    TIMELINE_STATUS_TILL: 'till',
    TIMELINE_STATUS_NOINFO: 'No information available ..',
    TIMELINE_STATUS_NOINFOFILTER: 'No current user statuses for this filter ..',
    ABOUT_LICENSE0: 'WhatsSpy Public is a Proof of Concept to show how broken Whatsapp privacy settings are. With this tool you can basicly follow anyone\'s behaviour with only the knowledge of their phone number. This tool is for Proof of Concept purposes only! Please read the',
    ABOUT_LICENSE1: 'license',
    ABOUT_LICENSE2: 'which applies to this PoC.',
    ABOUT_DONATION0: 'You can support this work by a small donation:',
    ABOUT_DONATION1: 'Bitcoin:',
    ABOUT_DONATION2: 'or via',
    ABOUT_DONATION3: 'Paypal',
    ABOUT_INFO: 'General information',
    ABOUT_VERSION: 'Running version:',
    ABOUT_UPDATE: 'is available.',
    ABOUT_UPTODATE: 'Your version is up to date.',
    ABOUT_UPDATE_NOW: 'Update',
    ABOUT_UPDATE_LOG: 'Updatelog and how-to-update',
    ABOUT_WIKI: 'Wiki home page:',
    ABOUT_WIKI_LINK: 'Gitlab Wiki',
    ABOUT_FAQ: 'FAQ:',
    ABOUT_FAQ_LINK: 'Frequently Asked Questions',
    ABOUT_TROUBLE: 'Troubleshooting:',
    ABOUT_TROUBLE_LINK: 'Troubleshooting',
    ABOUT_OPTIONS: 'Options:',
    ABOUT_OPTIONS_LOGOUT: 'Logout WebUI',
    ABOUT_ADVANCED: 'Advanced options:',
    ABOUT_ADVANCED_STOP: 'Stop tracker',
    ABOUT_ADVANCED_START: 'Start tracker',
    ABOUT_ADVANCED_UPDATE: 'Auto update',
    ABOUT_NEWS: 'Literature/news for this project:',
    ABOUT_AGENTS: 'Notification agents',
    ABOUT_AGENTS_NONE1: 'There are no notification agents configured in',
    ABOUT_AGENTS_NONE2: 'config.php',
    ABOUT_AGENTS_NONE3: 'Check config.example.php in case you are missing these options.',
    ABOUT_AGENTS_PROPS: 'Notifying properties:',
    ABOUT_AGENTS_USER: 'user actions',
    ABOUT_AGENTS_TRACKER: 'tracker actions',
    ABOUT_AGENTS_TO: 'to:',
    ABOUT_AGENTS_RESTART: 'Remember to restart the tracker after any change in your config.php.',
    ABOUT_QA: 'Question and Answers',
    CONTROLLER_TIMELINE_1D: '24 hours (best performance)',
    CONTROLLER_TIMELINE_7D: '7  days',
    CONTROLLER_TIMELINE_14D: '14 days',
    CONTROLLER_TIMELINE_31D: '31 days (slow)',
    CONTROLLER_TIMELINE_90D: '90 days (very slow)',
    CONTROLLER_CHAR_OPENED: 'opened',
    CONTROLLER_CHAR_TIMES: 'times',
    CONTROLLER_CHAR_MINUTES: 'minutes',
    CONTROLLER_COPY: 'Copy to clipboard: Ctrl+C, Enter',
    CONTROLLER_WEEKDAY_Sunday: 'Sunday',
    CONTROLLER_WEEKDAY_Monday: 'Monday',
    CONTROLLER_WEEKDAY_Tuesday: 'Tuesday',
    CONTROLLER_WEEKDAY_Wednesday: 'Wednesday',
    CONTROLLER_WEEKDAY_Thursday: 'Thursday',
    CONTROLLER_WEEKDAY_Friday: 'Friday',
    CONTROLLER_WEEKDAY_Saturday: 'Saturday',
    CONTROLLER_NONAME: 'No name',
    CONTROLLER_NOTOKEN: 'Not shared ...',
    CONTROLLER_TRACKER_REASON_NONE: 'not given',
    CONTROLLER_TIME_DAY: 'd',
    CONTROLLER_TIME_HOURS: 'h',
    CONTROLLER_TIME_MINUTES: 'min',
    CONTROLLER_TIME_SECONDS: 'sec',
    CONTROLLER_SERVER_NO_RES: 'Could not contact the server.',
    CONTROLLER_GROUP_NEW: 'Enter the new name for this group:',
    CONTROLLER_ACCOUNT_DEL: 'Are you sure you want to delete this Account?',
    CONTROLLER_ACCOUNT_REMOVED: ' removed!',
    CONTROLLER_ACCOUNT_UPDATED: 'Contact updated',
    CONTROLLER_ACCOUNT_ADDED: 'Contact added to WhatsSpy. Tracking will start in 5-10 minutes.',
    CONTROLLER_ACCOUNT_INACTIVE: ' set inactive!',
    CONTROLLER_GROUP_SAVE: 'Saved new groupname!',
    CONTROLLER_GROUP_ADD: 'New group added.',
    CONTROLLER_GROUP_DEL: 'Group removed.',
    CONTROLLER_CONFIG_UPDATE: 'Configuration updated',
    CONTROLLER_TIME_DAY_FULL: 'day',
    CONTROLLER_TIME_WEEK_FULL: 'week',
    CONTROLLER_TIME_MONTH_FULL: 'month',
    CONTROLLER_TIME_CUSTOM_FULL: 'custom',
    CONTROLLER_TIMELINE_HISTORY: 'History view:',
    CONTROLLER_TIMELINE_DAYS: 'day(s)',
    CONTROLLER_TIMELINE_ONLINE: 'Online',
    CONTROLLER_TIMELINE_DURATION: 'Duration:',
    CONTROLLER_COMPARISON_ALREADY_IN: ' is already in the comparison!',
    CONTROLLER_NOTIFICATION_ONLINE: ' is now online.',
    CONTROLLER_NOTIFICATION_STATUSMSG: ' has a new status message: ',
    CONTROLLER_NOTIFICATION_PROFPIC: ' has a new profile picture.',
    CONTROLLER_NOTIFICATION_PIRV_EVERY: 'everybody',
    CONTROLLER_NOTIFICATION_PRIV_CONTACTS: 'contacts or nobody',
    CONTROLLER_NOTIFICATION_PRIV_LASTSEEN: ' has changed his last seen privacy setting to ',
    CONTROLLER_NOTIFICATION_PRIV_PROFPIC: ' has changed his profile picture privacy setting to ',
    CONTROLLER_NOTIFICATION_PRIV_STATUSMSG: ' has changed his status message privacy setting to ',
    CONTROLLER_NOTIFICATION_TRACKER_START: 'Tracker has started tracking.',
    CONTROLLER_NOTIFICATION_TRACKER_STOP: 'Tracker has stopped tracking with reason: ',
    CONTROLLER_STAT_TIMES: 'times',
    CONTROLLER_CMD0: 'CMD: ',
    CONTROLLER_CMD1: ' resulted in code: ',
    CONTROLLER_CMD2: ' with output: '
    });
    moment.locale('en', {
        months : [
            "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ],
        monthsShort : [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        weekdays : [
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        weekdaysShort : [
            "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
        ],
        longDateFormat : {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "MM/DD/YYYY",
            l: "M/D/YYYY",
            LL: "MMMM Do YYYY",
            ll: "MMM D YYYY",
            LLL: "MMMM Do YYYY LT",
            lll: "MMM D YYYY LT",
            LLLL: "dddd, MMMM Do YYYY LT",
            llll: "ddd, MMM D YYYY LT"
        },
        relativeTime : {
            future: "in %s",
            past:   "%s ago",
            s:  "seconds",
            m:  "a minute",
            mm: "%d minutes",
            h:  "an hour",
            hh: "%d hours",
            d:  "a day",
            dd: "%d days",
            M:  "a month",
            MM: "%d months",
            y:  "a year",
            yy: "%d years"
        }
    });
    $translateProvider.useSanitizeValueStrategy('escape');

    // CURRENT WAY TO CHANGE THE LANGUAGE
    var language = 'en';

    $translateProvider.preferredLanguage(language);
    moment.locale(language);
}]);