var Header = React.createClass({
    render: function () {
        return (
            <header className="bar bar-nav">
                <a href="#" className={"icon icon-left-nav pull-left" + (this.props.back==="true"?"":" hidden")}></a>
                <h1 className="title">{this.props.text}</h1>
            </header>
        );
    }
});

var searchVal = '';

var SearchBar = React.createClass({
    searchHandler: function() {
        searchVal = this.refs.searchKey.getDOMNode().value;
        this.props.searchHandler(searchVal);
        this.props.searchKey.value = searchVal;
    },
    render: function () {
        return (
            <div className="bar bar-standard bar-header-secondary">
                <input type="search" ref="searchKey" placeholder="Type the area (e.g. Cubao)" onChange={this.searchHandler} value={this.searchHandler.searchVal}/>
            </div>

        );
    }
});

var StudioListItem = React.createClass({
    render: function () {
        return (
            <li className="table-view-cell media">
                <a href={"#studios/" + this.props.studio.id}>
                    <img className="media-object small pull-left" src={"pics/" + this.props.studio.pics + ".jpg"}/>
                    {this.props.studio.studioName} 
                    <p>{this.props.studio.address}</p>
                </a>
            </li>
        );
    }
});

var StudioList = React.createClass({
    render: function () {
        var items = this.props.studios.map(function (studio) {
            return (
                <StudioListItem key={studio.id} studio={studio} />
            );
        });
        return (
            <ul  className="table-view">
                {items}
            </ul>
        );
    }
});

var HomePage = React.createClass({
    render: function () {
        return (
            <div className={"page " + this.props.position}>
                <Header text="Where To Jam?" back="false"/>
                <SearchBar searchKey={this.props.searchKey} searchHandler={this.props.searchHandler}/>
                <div className="content">
                    <StudioList studios={this.props.studios}/>
                </div>
            </div>
        );
    }
});

var StudioPage = React.createClass({
    getInitialState: function() {
        return {studio: {}};
    },
    componentWillMount: function() {
        this.props.service.findById(this.props.studioId).done(function(result) {
            this.setState({studio: result});
        }.bind(this));
    },
    render: function () {
        return (
            <div className={"page " + this.props.position}>
                <Header text="Where To Jam?" back="true"/>
                <div className="card">
                    <ul className="table-view">
                        <li className="table-view-cell media">
                            <img className="media-object big pull-left" src={"pics/" + this.state.studio.pics + ".jpg"}/>
                            <br/>
                            <h1>{this.state.studio.studioName}</h1>
                            <p>{this.state.studio.address}</p>
                        </li>
                        <li className="table-view-cell media">
                            <a href={"tel:" + this.state.studio.landline} className="push-right">
                                <span className="media-object pull-left icon icon-call"></span>
                                <div className="media-body">
                                Call Office
                                    <p>{this.state.studio.landline}</p>
                                </div>
                            </a>
                        </li>
                        <li className="table-view-cell media">
                            <a href={"tel:" + this.state.studio.mobile} className="push-right">
                                <span className="media-object pull-left icon icon-call"></span>
                                <div className="media-body">
                                Call Mobile
                                    <p>{this.state.studio.mobile}</p>
                                </div>
                            </a>
                        </li>
                        <li className="table-view-cell media">
                            <a href={"sms:" + this.state.studio.mobile} className="push-right">
                                <span className="media-object pull-left icon icon-sms"></span>
                                <div className="media-body">
                                SMS
                                    <p>{this.state.studio.mobile}</p>
                                </div>
                            </a>
                        </li>
                        <li className="table-view-cell media">
                            <a href={"mailto:" + this.state.studio.email} className="push-right">
                                <span className="media-object pull-left icon icon-email"></span>
                                <div className="media-body">
                                Email
                                    <p>{this.state.studio.email}</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

var App = React.createClass({
    mixins: [PageSlider],
    getInitialState: function() {
        return {
            searchKey: '',
            studios: []
        }
    },
    searchHandler: function(searchKey) {
        studioService.findByName(searchKey).done(function(studios) {
            this.setState({
                searchKey:searchKey,
                studios: studios,
                pages: [<HomePage key="list" searchHandler={this.searchHandler} searchKey={searchKey} studios={studios}/>]});
        }.bind(this));
    },
    componentWillMount: function() {
        router.addRoute('', function() {
            this.slidePage(<HomePage key="list" searchHandler={this.searchHandler} searchKey={this.state.searchKey} studios={this.state.studios}/>);
        }.bind(this));
        router.addRoute('studios/:id', function(id) {
            this.slidePage(<StudioPage key="details" studioId={id} service={studioService}/>);
        }.bind(this));
        router.start();
    }
});

React.render(<App/>, document.body);