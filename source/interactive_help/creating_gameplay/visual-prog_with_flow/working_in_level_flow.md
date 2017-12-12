# Working in the Level Flow Editor

**To create a node**


- Right-click in the Flow graph area, then select a node category, sub-category, and node name.<br>The node is added to the flow graph, with no connections by default.
- From existing nodes, you can also create nodes by dragging from a port to an empty area of the graph, then selecting a new node category and node type from the pop-up menu. <br>(This menu is automatically populated with node types appropriate for the current connection.)


**To connect nodes**


- Click a port, or Ctrl-click to grab multiple ports, then drag to a port on another node.


**To delete connections**

Do either of the following:

- Alt+click the port or attribute name.
- Select the connection and press Delete.



**To modify connections**


- Ctrl+click a slot to remove its connection, then drag the connection to a new port.

> **Note:** In order for evaluation to flow through scripted nodes you created yourself (see ~{ Extending Flow }~ ), you must have connections to both their in and out ports.
