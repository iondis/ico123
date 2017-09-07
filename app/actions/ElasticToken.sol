pragma solidity ^0.4.11;

contract ElasticToken {
    /*
      EVENTS
    */
    event Transfer(address indexed _from, address indexed _to, uint256 indexed _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 indexed _value);
    event Mint(uint indexed _value, uint indexed _block);
    event Burn(address indexed _from, uint indexed _value, uint indexed _block);

    /*
      STATE
    */
    address public admin;
    string public name;
    string public ticker;
    uint8 public decimals;
    uint256 public supply;
    mapping(address => uint) public balances;
    mapping(address => mapping(address => uint)) public allowances;
    mapping(address => uint) burnings;

    /*
      CONSTRUCTOR
    */
    function ElasticToken(address _admin, string _name, string _ticker, uint8 _decimals, uint256 _supply) {
        admin = _admin;
        name = _name;
        ticker = _ticker;
        decimals = _decimals;
        supply = _supply;
        balances[msg.sender] = _supply;
    }

    /*
      PUBLIC FNS
    */

    function transfer(address _to, uint256 _value) public returns (bool) {
        require(balances[msg.sender] >= _value);
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {
        require(allowances[_from][msg.sender] >= _value);
        allowances[_from][msg.sender] -= _value;
        balances[_from] -=  _value;
        balances[_to] += _value;
        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool) {
        require(balances[msg.sender] >= _value);
        allowances[msg.sender][_spender] += _value;
        return true;
    }

    function burn(uint256 _value) public returns (bool) {
        require(balances[msg.sender] >= _value);
        balances[msg.sender] -= _value;
        burnings[msg.sender] += _value;
        supply -= _value;
        Burn(msg.sender, _value, block.number);
        return true;
    }

    function mint(uint256 _value) public returns (bool) {
        require(msg.sender == admin);
        supply += _value;
        balances[admin] += _value;
        Mint(_value, block.number);
        return true;
    }
}
